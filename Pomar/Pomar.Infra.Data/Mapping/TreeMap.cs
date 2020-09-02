using Garden.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Garden.Infra.Data.Mapping
{
    public class TreeMap : IEntityTypeConfiguration<Tree>
    {
        public Specie Specie { get; set; }

        public void Configure(EntityTypeBuilder<Tree> builder)
        {
            builder.ToTable("Tree");

            builder.HasKey(prop => prop.Id);

            builder.Property(prop => prop.TreeAge)
                .IsRequired()
                .HasColumnName("TreeAge");

            builder.Property(prop => prop.Information)
                .HasConversion(prop => prop.ToString(), prop => prop)
                .IsRequired()
                .HasColumnName("Information")
                .HasColumnType("varchar(100)");

            builder
                .HasOne(prop => prop.Specie)
                .WithMany(prop => prop.Trees)
                .HasForeignKey(prop => prop.SpecieId);

        }
    }
}