using Microsoft.AspNetCore.Mvc;
using prueba_back.DTOs;
using prueba_back.Services;

namespace prueba_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public IActionResult Login(UserDto loginDto)
        {
            var token = _authService.Authenticate(loginDto.Username, loginDto.Password);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(new { Token = token });
        }

        [HttpPost("register")]
        public IActionResult Register(UserDto registerDto)
        {
            var user = _authService.Register(registerDto);
            if (user == null)
            {
                return BadRequest("El usuario ya existe.");
            }
            return Ok(user);
        }
    }
}
