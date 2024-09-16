using prueba_back.Models;
using prueba_back.DTOs;
using prueba_back.Helpers;
using System.Collections.Generic;

namespace prueba_back.Services
{
    public class AuthService
    {
        private readonly ApplicationDbContext _context;

        public AuthService(ApplicationDbContext context)
        {
            _context = context;
        }

        public string Authenticate(string username, string password)
        {
            var user = _context.Users.SingleOrDefault(u => u.Username == username && u.PasswordHash == password);
            if (user == null) return null;

            return JwtHelper.GenerateJwtToken(user);
        }

        public User Register(UserDto userDto)
        {
            if (_context.Users.Any(u => u.Username == userDto.Username))
            {
                return null;
            }

            var user = new User
            {
                Username = userDto.Username,
                PasswordHash = userDto.Password,
                Email = userDto.Email,
                RoleId = userDto.RoleId
            };

            _context.Users.Add(user);
            _context.SaveChanges();

            return user;
        }
    }
}
