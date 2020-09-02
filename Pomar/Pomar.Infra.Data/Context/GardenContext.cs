using Flunt.Notifications;
using Garden.Domain.Entities;
using Garden.Domain.ValueTypes;
using Garden.Infra.Data.Mapping;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Reflection;

namespace Garden.Infra.Data.Context
{
    public class GardenContext : DbContext
    {
        public GardenContext(DbContextOptions<GardenContext> options) : base(options)
        {

        }
        public DbSet<Tree> Trees { get; set; }
        public DbSet<Harvest> Harvests { get; set; }
        public DbSet<Specie> Species { get; set; }
        public DbSet<GroupTree> GroupTrees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Tree>(new TreeMap().Configure);
            modelBuilder.Entity<Harvest>(new HarvestMap().Configure);
            modelBuilder.Entity<Specie>(new SpecieMap().Configure);
            modelBuilder.Entity<GroupTree>(new GroupTreeMap().Configure);

            var entites = Assembly
                .Load("Garden.Domain")
                .GetTypes()
                .Where(w => w.Namespace == "Garden.Domain.Entities" && w.BaseType.BaseType == typeof(Notifiable));

            foreach (var item in entites)
            {
                modelBuilder.Entity(item).Ignore(nameof(Notifiable.Invalid));
                modelBuilder.Entity(item).Ignore(nameof(Notifiable.Valid));
                modelBuilder.Entity(item).Ignore(nameof(Notifiable.Notifications));
            }
        }
    }
}
