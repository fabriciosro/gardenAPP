using Garden.Domain.Entities;
using Garden.Domain.Interfaces;
using Garden.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace Garden.Infra.Data.Repository
{
    public class TreeRepository : BaseRepository<Tree, int>, IRepositoryTree
    {
        public TreeRepository(GardenContext mySqlContext) : base(mySqlContext)
        {
        }

        public void Remove(int id) =>
            base.Delete(id);


        public void Save(Tree obj)
        {
            if (obj.Id == 0)
                base.Insert(obj);
            else
                base.Update(obj);
        }

        public Tree GetById(int id) =>
            base.Select(id);

        public IList<Tree> GetAll() =>
            base.Select();

    }
}
