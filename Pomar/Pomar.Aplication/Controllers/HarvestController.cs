using System;
using Garden.Domain.Interfaces;
using Garden.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Garden.Aplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HarvestController : Controller
    {
        private readonly IServiceHarvest _serviceHarvest;

        public HarvestController(IServiceHarvest serviceHarvest) =>
            _serviceHarvest = serviceHarvest;

        [HttpPost]
        public IActionResult Register([FromBody] CreateHarvestModel harvestModel)
        {
            try
            {
                var harvest = _serviceHarvest.Insert(harvestModel);

                return Ok(harvest?.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] UpdateHarvestModel harvestModel)
        {
            try
            {
                var harvest = _serviceHarvest.Update(id, harvestModel);

                return Ok(harvest);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Remove([FromRoute] int id)
        {
            try
            {
                _serviceHarvest.Delete(id);

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        public IActionResult RecoverAll()
        {
            try
            {
                var harvests = _serviceHarvest.RecoverAll();
                return Ok(harvests);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("{id}")]
        public IActionResult Recover([FromRoute] int id)
        {
            try
            {
                var harvest = _serviceHarvest.RecoverById(id);
                return Ok(harvest);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
