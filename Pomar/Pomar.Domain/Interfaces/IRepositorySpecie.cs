using Garden.Domain.Entities;
using System.Collections.Generic;

namespace Garden.Domain.Interfaces
{
    public interface IRepositorySpecie
    {
        void Save(Specie obj);
        void Remove(int id);
        Specie GetById(int id);
        IList<Specie> GetAll();
    }
}
