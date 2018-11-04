using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {

        private readonly StudentContext _context;

        public StudentController(StudentContext context)
        {
            _context = context;
            if (_context.Students.Count() == 0)
            {
                _context.Students.Add(
                    new Student
                    {
                        id = 1,
                        name = "jatai text"
                    }
                );
                _context.SaveChanges();

            }
        }

        [HttpGet]
        public ActionResult<List<Student>> GetAll()
        {
            return _context.Students.ToList();
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public ActionResult<Student> GetById(long id)
        {
            var item = _context.Students.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return item;
        }

        [HttpPost]
        public IActionResult Create(Student item)
        {
            _context.Students.Add(item);
            _context.SaveChanges();
            return CreatedAtRoute("GetTodo", new { id = item.id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, Student item)
        {
            var student = _context.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }
            student.name = item.name;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var student = _context.Students.Find(id);
            if (student == null)
            {
                return NotFound();
            }
            _context.Students.Remove(student);
            _context.SaveChanges();
            return NoContent();
        }

    }
}
