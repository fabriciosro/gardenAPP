using Garden.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Garden.Infra.Data.Mapping
{
    public class HarvestMap : IEntityTypeConfiguration<Harvest>
    {
        public Tree Tree { get; set; }
        public GroupTree GroupTree { get; set; }

        public void Configure(EntityTypeBuilder<Harvest> builder)
        {
            builder.ToTable("Harvest");

            builder.HasKey(prop => prop.Id);

            builder.Property(prop => prop.HarvestDate)
                .IsRequired()
                .HasColumnName("HarvestDate");

            builder.Property(prop => prop.Information)
                .HasConversion(prop => prop.ToString(), prop => prop)
                .IsRequired()
                .HasColumnName("Information")
                .HasColumnType("varchar(100)");

            builder.Property(prop => prop.GrossWeight)
                .IsRequired(false)
                .HasColumnName("GrossWeight")
                .HasColumnType("int");

            builder
                .HasOne(prop => prop.Tree)
                .WithMany(prop => prop.Harvests)
                .HasForeignKey(prop => prop.TreeId);

        }
    }
}
