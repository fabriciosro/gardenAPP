using Garden.Domain.Entities;
using System;

namespace Garden.Domain.Models
{
    public class HarvestModel
    {
        public HarvestModel(int id, string information, DateTime harvestDate, int? grossWeight, int treeId)
        {
            Id = id;
            Information = information;
            HarvestDate = harvestDate;
            GrossWeight = grossWeight;
            TreeId = treeId;
        }
        public HarvestModel(int id, string information, DateTime harvestDate, int? grossWeight, string treeInformation)
        {
            Id = id;
            Information = information;
            HarvestDate = harvestDate;
            GrossWeight = grossWeight;
            TreeInformation = treeInformation;
        }

        public int Id { get; set; }
        public string Information { get; set; }
        public DateTime HarvestDate { get; set; }
        public int? GrossWeight { get; set; }
        public int TreeId { get; set; }
        public string TreeInformation { get; set; }
        public Tree Tree { get; set; }
        public GroupTree GroupTree { get; set; }
    }
}
