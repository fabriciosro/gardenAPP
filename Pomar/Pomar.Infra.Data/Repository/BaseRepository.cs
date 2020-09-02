using Garden.Domain.Entities;
using Garden.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Garden.Infra.Data.Repository
{
    public class BaseRepository<TEntity, TKeyType> where TEntity : BaseEntity<TKeyType>
    {
        protected readonly GardenContext _SqlContext;

        public BaseRepository(GardenContext sqlContext)
        {
            _SqlContext = sqlContext;
        }

        protected virtual void Insert(TEntity obj)
        {
            _SqlContext.Set<TEntity>().Add(obj);
            _SqlContext.SaveChanges();
        }

        protected virtual void Update(TEntity obj)
        {
            _SqlContext.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _SqlContext.SaveChanges();
        }

        protected virtual void Delete(int id)
        {
            _SqlContext.Set<TEntity>().Remove(Select(id));
            _SqlContext.SaveChanges();
        }

        protected virtual IList<TEntity> Select() =>
            _SqlContext.Set<TEntity>().ToList();

        protected virtual TEntity Select(int id) =>
            _SqlContext.Set<TEntity>().Find(id);
    }
}
