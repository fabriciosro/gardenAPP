using Garden.Domain.Models;
using System.Collections.Generic;

namespace Garden.Domain.Interfaces
{
    public interface IServiceSpecie
    {
        SpecieModel Insert(CreateSpecieModel specieModel);
        SpecieModel Update(int id, UpdateSpecieModel specieModel);
        void Delete(int id);
        SpecieModel RecoverById(int id);
        IEnumerable<SpecieModel> RecoverAll();
    }
}
