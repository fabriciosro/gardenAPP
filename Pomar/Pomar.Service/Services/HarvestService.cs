using Flunt.Validations;
using Garden.Domain.Interfaces;
using Garden.Domain.Models;
using Garden.Infra.Shared.Contexts;
using Garden.Infra.Shared.Mapper;
using System.Collections.Generic;

namespace Garden.Service.Services
{
    public class HarvestService : IServiceHarvest
    {
        private readonly IRepositoryHarvest _repositoryHarvest;
        private readonly NotificationContext _notificationContext;

        public HarvestService(IRepositoryHarvest repositoryHarvest, NotificationContext notificationContext)
        {
            _repositoryHarvest = repositoryHarvest;
            _notificationContext = notificationContext;
        }

        public IEnumerable<HarvestModel> RecoverAll()
        {
            var harvests = _repositoryHarvest.GetAll();
            return harvests.ConvertToHarvests();
        }

        public HarvestModel RecoverById(int id)
        {
            var harvest = _repositoryHarvest.GetById(id);
            return harvest.ConvertToHarvest();
        }

        public void Delete(int id) =>
            _repositoryHarvest.Remove(id);

        public HarvestModel Insert(CreateHarvestModel harvestModel)
        {
            var harvest = harvestModel.ConvertToHarvestEntity();
            _notificationContext.AddNotifications(harvest.Notifications);

            if (_notificationContext.Invalid)
                return default;

            _repositoryHarvest.Save(harvest);

            return harvest.ConvertToHarvest();
        }

        public HarvestModel Update(int id, UpdateHarvestModel harvestModel)
        {
            if (id != harvestModel.Id)
            {
                _notificationContext.AddNotifications(new Contract().AreNotEquals(id, harvestModel.Id, nameof(id), "Harvest not found."));

                return default;
            }

            var harvest = harvestModel.ConvertToHarvestEntity();

            _notificationContext.AddNotifications(harvest.Notifications);

            if (_notificationContext.Invalid)
                return default;

            _repositoryHarvest.Save(harvest);
            return harvest.ConvertToHarvest();
        }
    }
}
