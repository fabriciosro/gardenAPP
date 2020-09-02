using Garden.Domain.Models;
using System.Collections.Generic;

namespace Garden.Domain.Interfaces
{
    public interface IServiceHarvest
    {
        HarvestModel Insert(CreateHarvestModel harvestModel);
        HarvestModel Update(int id, UpdateHarvestModel harvestModel);
        void Delete(int id);
        HarvestModel RecoverById(int id);
        IEnumerable<HarvestModel> RecoverAll();
    }
}
