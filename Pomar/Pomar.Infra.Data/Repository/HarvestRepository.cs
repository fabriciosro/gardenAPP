using Garden.Domain.Entities;
using Garden.Domain.Interfaces;
using Garden.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garden.Infra.Data.Repository
{
    public class HarvestRepository : BaseRepository<Harvest, int>, IRepositoryHarvest
    {
        public HarvestRepository(GardenContext mySqlContext) : base(mySqlContext)
        {
        }

        public void Remove(int id) =>
            base.Delete(id);


        public void Save(Harvest obj)
        {
            if (obj.Id == 0)
                base.Insert(obj);
            else
                base.Update(obj);
        }

        public Harvest GetById(int id) =>
            base.Select(id);

        public IList<Harvest> GetAll() =>
            base.Select();

    }
}
