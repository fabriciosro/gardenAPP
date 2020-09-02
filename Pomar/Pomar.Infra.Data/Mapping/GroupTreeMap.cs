using Garden.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Garden.Infra.Data.Mapping
{
    public class GroupTreeMap : IEntityTypeConfiguration<GroupTree>
    {
        public void Configure(EntityTypeBuilder<GroupTree> builder)
        {
            builder.ToTable(nameof(GroupTree));

            builder.HasKey(prop => prop.Id);

            builder.Property(prop => prop.Name)
               //.IsRequired()
               .HasColumnType("varchar(50)");

            builder.Property(prop => prop.Information)
               //.IsRequired()
               .HasColumnType("varchar(100)");

        }
    }
}
