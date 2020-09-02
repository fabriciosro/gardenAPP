using Garden.Domain.Entities;
using System.Collections.Generic;

namespace Garden.Domain.Interfaces
{
    public interface IRepositoryTree
    {
        void Save(Tree obj);
        void Remove(int id);
        Tree GetById(int id);
        IList<Tree> GetAll();
    }
}
