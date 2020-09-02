using Garden.Domain.Entities;
using Garden.Domain.Interfaces;
using Garden.Infra.Data.Context;
using System.Collections.Generic;

namespace Garden.Infra.Data.Repository
{
    public class SpecieRepository : BaseRepository<Specie, int>, IRepositorySpecie
    {
        public SpecieRepository(GardenContext mySqlContext) : base(mySqlContext)
        {
        }

        public void Remove(int id) =>
            base.Delete(id);

        public void Save(Specie obj)
        {
            if (obj.Id == 0)
                base.Insert(obj);
            else
                base.Update(obj);
        }

        public Specie GetById(int id) =>
            base.Select(id);

        public IList<Specie> GetAll() =>
            base.Select();
    }
}
