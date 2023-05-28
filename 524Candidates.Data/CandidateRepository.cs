using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _524Candidates.Data
{
    public class CandidateRepository
    {
        private string _connectionString;
        public CandidateRepository(string conStr)
        {
            _connectionString = conStr;
        }
        public int GetCount(RegistrationStatus status)
        {
            using var context = new CandidateDbContext(_connectionString);
            return context.Candidates.Count(c => c.RegistrationStatus == status);
        }
        public List<Candidate> GetForStatus(RegistrationStatus status)
        {
            using var context = new CandidateDbContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == status).ToList();
        }
        public void Add(Candidate c)
        {
            using var context = new CandidateDbContext(_connectionString);
            context.Candidates.Add(c);
            context.SaveChanges();
        }
        public Candidate GetById(int id)
        {
            using var context = new CandidateDbContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public Candidate ChangeStatus(int id, RegistrationStatus status)
        {
            using var context = new CandidateDbContext(_connectionString);
            var candidate = context.Candidates.FirstOrDefault(c => c.Id == id);
            candidate.RegistrationStatus = status;
            context.SaveChanges();
            return candidate;
        }
    }
}

