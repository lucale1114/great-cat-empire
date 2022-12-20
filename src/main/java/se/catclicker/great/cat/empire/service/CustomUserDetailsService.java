// package se.catclicker.great.cat.empire.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;

// import se.catclicker.great.cat.empire.authentication.CustomUserDetails;
// import se.catclicker.great.cat.empire.data.UserRepository;
 
// public class CustomUserDetailsService implements UserDetailsService {
 
//     @Autowired
//     private UserRepository userRepo;
     
//     @Override
//     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//         List<se.catclicker.great.cat.empire.entity.User> user = userRepo.findByUsernameContaining(username);
//         if (user == null) {
//             throw new UsernameNotFoundException("User not found");
//         }
//         return new CustomUserDetails((User) user);
//     }
    
// }
