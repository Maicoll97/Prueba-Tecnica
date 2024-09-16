using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using prueba_back.Services;
using prueba_back.DTOs;

namespace prueba_back.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TaskService _taskService;

        public TasksController(TaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        public IActionResult GetTasks()
        {
            return Ok(_taskService.GetAllTasks());
        }

        [HttpPost]
        [Authorize(Roles = "Administrador, Supervisor")]
        public IActionResult CreateTask(TaskDto taskDto)
        {
            var task = _taskService.CreateTask(taskDto);
            return Ok(task);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Administrador, Supervisor")]
        public IActionResult UpdateTask(int id, TaskDto taskDto)
        {
            var task = _taskService.UpdateTask(id, taskDto);
            return Ok(task);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrador")]
        public IActionResult DeleteTask(int id)
        {
            _taskService.DeleteTask(id);
            return NoContent();
        }
    }
}
