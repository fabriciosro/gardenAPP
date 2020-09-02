using Garden.Domain.Entities;
using Garden.Domain.Interfaces;
using Garden.Infra.Data.Context;
using System.Collections.Generic;

namespace Garden.Infra.Data.Repository
{
    public class GroupTreeRepository : BaseRepository<GroupTree, int>, IRepositoryGroupTree
    {
        public GroupTreeRepository(GardenContext mySqlContext) : base(mySqlContext)
        {
        }
        public void Remove(int id) =>
            base.Delete(id);

        public void Save(GroupTree obj)
        {
            if (obj.Id == 0)
                base.Insert(obj);
            else
                base.Update(obj);
        }

        public GroupTree GetById(int id) =>
            base.Select(id);

        public IList<GroupTree> GetAll() =>
            base.Select();
    }
}
