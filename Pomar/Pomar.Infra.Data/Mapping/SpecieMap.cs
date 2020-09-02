using Garden.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garden.Infra.Data.Mapping
{
    public class SpecieMap : IEntityTypeConfiguration<Specie>
    {
        public void Configure(EntityTypeBuilder<Specie> builder)
        {
            builder.ToTable(nameof(Specie));

            builder.HasKey(prop => prop.Id);

            builder.Property(prop => prop.Information)
               .IsRequired()
               .HasColumnType("varchar(50)");
        }
    }
}
