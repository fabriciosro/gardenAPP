using Flunt.Validations;
using Garden.Domain.ValueTypes;
using System;

namespace Garden.Domain.Entities
{
    public class Harvest : BaseEntity<int>
    {
        public Harvest(int id, Information information, DateTime harvestDate, int grossWeight, int treeId) : base(id)
        {
            AddNotifications(
                information.contract);

            if (Valid)
            {
                Information = information;
                HarvestDate = harvestDate;
                GrossWeight = grossWeight;
                TreeId = treeId;
            }
        }

        public Harvest(int id, Information information, DateTime harvestDate, int grossWeight, Tree tree) : base(id)
        {
            AddNotifications(
                information.contract);

            if (Valid)
            {
                Information = information;
                HarvestDate = harvestDate;
                GrossWeight = grossWeight;
                Tree = tree;
            }
        }

        protected Harvest() { }
        public Information Information { get; }
        public DateTime HarvestDate { get; }
        public int? GrossWeight { get; }
        public int TreeId { get; }
        public Tree Tree { get; }
        public GroupTree GroupTree { get; }
    }
}
