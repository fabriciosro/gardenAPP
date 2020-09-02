using Garden.Domain.Entities;
using System.Collections.Generic;

namespace Garden.Domain.Interfaces
{
    public interface IRepositoryGroupTree
    {
        void Save(GroupTree obj);
        void Remove(int id);
        GroupTree GetById(int id);
        IList<GroupTree> GetAll();
    }
}
