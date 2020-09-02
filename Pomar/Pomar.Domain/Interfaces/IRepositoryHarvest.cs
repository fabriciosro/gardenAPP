using Garden.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garden.Domain.Interfaces
{
    public interface IRepositoryHarvest
    {
        IList<Harvest> GetAll();
        Harvest GetById(int id);
        void Save(Harvest obj);
        void Remove(int id);
    }
}
