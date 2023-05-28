using _524Candidates.Data;
using _524Candidates.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices;

namespace _524Candidates.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private string _connectionString;

        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("add")]
        [HttpPost]
        public void Add(Candidate c)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.Add(c);
        }

        [Route("getcount")]
        [HttpGet]
        public int GetCount (RegistrationStatus status)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCount(status);
        }

        [Route("getall")]
        [HttpGet]

        public List<Candidate> getAllForStatus(RegistrationStatus status)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetForStatus(status);
        }

        [Route("getbyid")]
        [HttpGet]
        public Candidate getById (int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetById(id);
        }

        [Route("changestatus")]
        [HttpPost]
        public Candidate ChangeStatus (ViewModel vm)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.ChangeStatus(vm.Id, vm.Status);
        }

    }
}
