/*import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export function AppProvider(props) {
  const [studentData, setStudentData] = useState({
    name: '',
    sapId: '',
    semester: '',
    gpa: '',
    cgpa: '',
    profilePicture: '',
    courses: [],
  });
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load theme from storage
  function loadTheme() {
    AsyncStorage.getItem('theme')
      .then(function(savedTheme) {
        if (savedTheme !== null) {
          setIsDarkMode(savedTheme === 'dark');
        }
        setIsLoading(false);
      })
      .catch(function(error) {
        console.log('Error loading theme:', error);
        setIsLoading(false);
      });
  }

  // Save theme to storage
  function saveTheme(theme) {
    AsyncStorage.setItem('theme', theme)
      .then(function() {
        console.log('Theme saved:', theme);
      })
      .catch(function(error) {
        console.log('Error saving theme:', error);
      });
  }

  // Toggle theme
  function toggleTheme() {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    saveTheme(newTheme ? 'dark' : 'light');
  }

  // Load student data from storage
  function loadStudentData() {
    AsyncStorage.getItem('studentData')
      .then(function(data) {
        if (data !== null) {
          const parsedData = JSON.parse(data);
          setStudentData(parsedData);
        } else {
          // Default student data
          const defaultData = {
            name: 'John Doe',
            sapId: '70123456',
            semester: '6th',
            gpa: '3.75',
            cgpa: '3.82',
            profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
            courses: [
              { id: '1', name: 'Mobile Application Development', timing: 'Monday 10:00 AM', instructor: 'Ms. Kausar Khattak', code: 'CS401' },
              { id: '2', name: 'Web Application Development', timing: 'Tuesday 11:00 AM', instructor: 'Dr. Ahmed Raza', code: 'CS402' },
              { id: '3', name: 'Database Systems', timing: 'Wednesday 9:00 AM', instructor: 'Prof. Sana Khan', code: 'CS403' },
              { id: '4', name: 'Data Structures', timing: 'Thursday 2:00 PM', instructor: 'Dr. Bilal Ahmed', code: 'CS404' },
              { id: '5', name: 'Software Engineering', timing: 'Friday 10:00 AM', instructor: 'Ms. Fatima Ali', code: 'CS405' },
              { id: '6', name: 'Computer Networks', timing: 'Monday 2:00 PM', instructor: 'Dr. Usman Malik', code: 'CS406' },
              { id: '7', name: 'Artificial Intelligence', timing: 'Wednesday 3:00 PM', instructor: 'Prof. Zara Tariq', code: 'CS407' },
            ],
          };
          setStudentData(defaultData);
          AsyncStorage.setItem('studentData', JSON.stringify(defaultData));
        }
      })
      .catch(function(error) {
        console.log('Error loading student data:', error);
      });
  }

  // Update student data
  function updateStudentData(newData) {
    setStudentData(newData);
    AsyncStorage.setItem('studentData', JSON.stringify(newData))
      .then(function() {
        console.log('Student data updated');
      })
      .catch(function(error) {
        console.log('Error updating student data:', error);
      });
  }

  // Clear all data (reset)
  function resetAllData() {
    const defaultData = {
      name: 'John Doe',
      sapId: '70123456',
      semester: '6th',
      gpa: '3.75',
      cgpa: '3.82',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      courses: [
        { id: '1', name: 'Mobile Application Development', timing: 'Monday 10:00 AM', instructor: 'Ms. Kausar Khattak', code: 'CS401' },
        { id: '2', name: 'Web Application Development', timing: 'Tuesday 11:00 AM', instructor: 'Dr. Ahmed Raza', code: 'CS402' },
        { id: '3', name: 'Database Systems', timing: 'Wednesday 9:00 AM', instructor: 'Prof. Sana Khan', code: 'CS403' },
        { id: '4', name: 'Data Structures', timing: 'Thursday 2:00 PM', instructor: 'Dr. Bilal Ahmed', code: 'CS404' },
        { id: '5', name: 'Software Engineering', timing: 'Friday 10:00 AM', instructor: 'Ms. Fatima Ali', code: 'CS405' },
        { id: '6', name: 'Computer Networks', timing: 'Monday 2:00 PM', instructor: 'Dr. Usman Malik', code: 'CS406' },
        { id: '7', name: 'Artificial Intelligence', timing: 'Wednesday 3:00 PM', instructor: 'Prof. Zara Tariq', code: 'CS407' },
      ],
    };
    setStudentData(defaultData);
    AsyncStorage.setItem('studentData', JSON.stringify(defaultData));
    AsyncStorage.removeItem('userSession');
    AsyncStorage.removeItem('theme');
    setIsLoggedIn(false);
    setIsDarkMode(false);
  }

  // Login function
  function login(email, password) {
    return new Promise(function(resolve, reject) {
      // Simulate API call
      setTimeout(function() {
        if (email && password) {
          const session = { email: email, loggedIn: true, timestamp: Date.now() };
          AsyncStorage.setItem('userSession', JSON.stringify(session))
            .then(function() {
              setIsLoggedIn(true);
              loadStudentData();
              resolve({ success: true });
            })
            .catch(function(error) {
              reject(error);
            });
        } else {
          reject({ success: false, message: 'Invalid credentials' });
        }
      }, 500);
    });
  }

  // Signup function
  function signup(email, password, userData) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (email && password) {
          const newStudentData = {
            name: userData.name || 'New Student',
            sapId: userData.sapId || '70123456',
            semester: userData.semester || '1st',
            gpa: '0.00',
            cgpa: '0.00',
            profilePicture: 'https://randomuser.me/api/portraits/lego/1.jpg',
            courses: studentData.courses,
          };
          
          AsyncStorage.setItem('studentData', JSON.stringify(newStudentData))
            .then(function() {
              setStudentData(newStudentData);
              const session = { email: email, loggedIn: true, timestamp: Date.now() };
              return AsyncStorage.setItem('userSession', JSON.stringify(session));
            })
            .then(function() {
              setIsLoggedIn(true);
              resolve({ success: true });
            })
            .catch(function(error) {
              reject(error);
            });
        } else {
          reject({ success: false, message: 'Invalid information' });
        }
      }, 500);
    });
  }

  // Logout function
  function logout() {
    AsyncStorage.removeItem('userSession')
      .then(function() {
        setIsLoggedIn(false);
        setStudentData(null);
      })
      .catch(function(error) {
        console.log('Error during logout:', error);
      });
  }

  // Check login status on app start
  function checkLoginStatus() {
    AsyncStorage.getItem('userSession')
      .then(function(session) {
        if (session !== null) {
          const parsedSession = JSON.parse(session);
          if (parsedSession.loggedIn === true) {
            setIsLoggedIn(true);
            loadStudentData();
          }
        }
        setIsLoading(false);
      })
      .catch(function(error) {
        console.log('Error checking login status:', error);
        setIsLoading(false);
      });
  }

  useEffect(function() {
    checkLoginStatus();
    loadTheme();
  }, []);

  const contextValue = {
    studentData: studentData,
    setStudentData: setStudentData,
    updateStudentData: updateStudentData,
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
    login: login,
    signup: signup,
    logout: logout,
    isDarkMode: isDarkMode,
    toggleTheme: toggleTheme,
    isLoading: isLoading,
    resetAllData: resetAllData,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}
  */

// frontend/context/AppContext.js
import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export function AppProvider(props) {
  const [studentData, setStudentData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  // Load theme from storage
  function loadTheme() {
    AsyncStorage.getItem('theme')
      .then(function(savedTheme) {
        if (savedTheme !== null) {
          setIsDarkMode(savedTheme === 'dark');
        }
        setIsLoading(false);
      })
      .catch(function(error) {
        console.log('Error loading theme:', error);
        setIsLoading(false);
      });
  }

  // Save theme to storage
  function saveTheme(theme) {
    AsyncStorage.setItem('theme', theme)
      .catch(function(error) {
        console.log('Error saving theme:', error);
      });
  }

  function toggleTheme() {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    saveTheme(newTheme ? 'dark' : 'light');
  }

  // Load student data for specific user
  function loadStudentDataForUser(email) {
    return AsyncStorage.getItem(`studentData_${email}`)
      .then(function(data) {
        if (data !== null) {
          const parsedData = JSON.parse(data);
          setStudentData(parsedData);
          return parsedData;
        } else {
          // Default student data for new user
          const defaultData = {
            name: email.split('@')[0] || 'Student',
            sapId: '70123456',
            semester: '6th',
            gpa: '3.75',
            cgpa: '3.82',
            profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
            courses: [
              { id: '1', name: 'Mobile Application Development', timing: 'Monday 10:00 AM', instructor: 'Ms. Kausar Khattak', code: 'CS401' },
              { id: '2', name: 'Parallel and Distributed Computing', timing: 'Tuesday 11:00 AM', instructor: 'Prof. Hajrah Murtaza', code: 'CS402' },
              { id: '3', name: 'Entrepreneurship', timing: 'Wednesday 9:00 AM', instructor: 'Ms. Nimra Waqar', code: 'CS403' },
              { id: '4', name: 'Compiler Construction', timing: 'Thursday 2:00 PM', instructor: 'Ms. Khadija Malik', code: 'CS404' },
              { id: '5', name: 'Computer Networks', timing: 'Monday 2:00 PM', instructor: 'Ms. Seemab Karim', code: 'CS406' },
              { id: '6', name: 'Artificial Intelligence', timing: 'Wednesday 3:00 PM', instructor: 'Prof. Shumaila Qayyum', code: 'CS407' },
            ],
          };
          setStudentData(defaultData);
          // Save default data for this user
          AsyncStorage.setItem(`studentData_${email}`, JSON.stringify(defaultData));
          return defaultData;
        }
      })
      .catch(function(error) {
        console.log('Error loading student data:', error);
        return null;
      });
  }

  // Update student data for current user
  function updateStudentData(newData) {
    if (!currentUser) return;
    setStudentData(newData);
    AsyncStorage.setItem(`studentData_${currentUser.email}`, JSON.stringify(newData))
      .catch(function(error) {
        console.log('Error updating student data:', error);
      });
  }

  // Clear all data for current user (reset)
  function resetAllData() {
    if (!currentUser) return;
    const defaultData = {
      name: currentUser.email.split('@')[0] || 'Student',
      sapId: '70123456',
      semester: '6th',
      gpa: '3.75',
      cgpa: '3.82',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      courses: [
              { id: '1', name: 'Mobile Application Development', timing: 'Monday 10:00 AM', instructor: 'Ms. Kausar Khattak', code: 'CS401' },
              { id: '2', name: 'Parallel and Distributed Computing', timing: 'Tuesday 11:00 AM', instructor: 'Prof. Hajrah Murtaza', code: 'CS402' },
              { id: '3', name: 'Entrepreneurship', timing: 'Wednesday 9:00 AM', instructor: 'Ms. Nimra Waqar', code: 'CS403' },
              { id: '4', name: 'Compiler Construction', timing: 'Thursday 2:00 PM', instructor: 'Ms. Khadija Malik', code: 'CS404' },
              { id: '5', name: 'Computer Networks', timing: 'Monday 2:00 PM', instructor: 'Ms. Seemab Karim', code: 'CS406' },
              { id: '6', name: 'Artificial Intelligence', timing: 'Wednesday 3:00 PM', instructor: 'Prof. Shumaila Qayyum', code: 'CS407' },      ],
    };
    setStudentData(defaultData);
    AsyncStorage.setItem(`studentData_${currentUser.email}`, JSON.stringify(defaultData));
  }

  // Login function
  function login(email, password) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (email && password) {
          const session = { email: email, loggedIn: true, timestamp: Date.now() };
          AsyncStorage.setItem('userSession', JSON.stringify(session))
            .then(function() {
              setCurrentUser({ email: email });
              setIsLoggedIn(true);
              return loadStudentDataForUser(email);
            })
            .then(function() {
              resolve({ success: true });
            })
            .catch(function(error) {
              reject(error);
            });
        } else {
          reject({ success: false, message: 'Invalid credentials' });
        }
      }, 500);
    });
  }

  // Signup function
  function signup(email, password, userData) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (email && password) {
          const newStudentData = {
            name: userData.name || email.split('@')[0] || 'Student',
            sapId: userData.sapId || '70123456',
            semester: '1st',
            gpa: '0.00',
            cgpa: '0.00',
            profilePicture: 'https://randomuser.me/api/portraits/lego/1.jpg',
            courses: [
              { id: '1', name: 'Mobile Application Development', timing: 'Monday 10:00 AM', instructor: 'Ms. Kausar Khattak', code: 'CS401' },
              { id: '2', name: 'Parallel and Distributed Computing', timing: 'Tuesday 11:00 AM', instructor: 'Prof. Hajrah Murtaza', code: 'CS402' },
              { id: '3', name: 'Entrepreneurship', timing: 'Wednesday 9:00 AM', instructor: 'Ms. Nimra Waqar', code: 'CS403' },
              { id: '4', name: 'Compiler Construction', timing: 'Thursday 2:00 PM', instructor: 'Ms. Khadija Malik', code: 'CS404' },
              { id: '5', name: 'Computer Networks', timing: 'Monday 2:00 PM', instructor: 'Ms. Seemab Karim', code: 'CS406' },
              { id: '6', name: 'Artificial Intelligence', timing: 'Wednesday 3:00 PM', instructor: 'Prof. Shumaila Qayyum', code: 'CS407' },
            ],
          };
          
          AsyncStorage.setItem(`studentData_${email}`, JSON.stringify(newStudentData))
            .then(function() {
              const session = { email: email, loggedIn: true, timestamp: Date.now() };
              return AsyncStorage.setItem('userSession', JSON.stringify(session));
            })
            .then(function() {
              setCurrentUser({ email: email });
              setStudentData(newStudentData);
              setIsLoggedIn(true);
              resolve({ success: true });
            })
            .catch(function(error) {
              reject(error);
            });
        } else {
          reject({ success: false, message: 'Invalid information' });
        }
      }, 500);
    });
  }

  // Logout function
  function logout() {
    AsyncStorage.removeItem('userSession')
      .then(function() {
        setIsLoggedIn(false);
        setStudentData(null);
        setCurrentUser(null);
      })
      .catch(function(error) {
        console.log('Error during logout:', error);
      });
  }

  // Check login status on app start
  function checkLoginStatus() {
    AsyncStorage.getItem('userSession')
      .then(function(session) {
        if (session !== null) {
          const parsedSession = JSON.parse(session);
          if (parsedSession.loggedIn === true) {
            setCurrentUser({ email: parsedSession.email });
            setIsLoggedIn(true);
            return loadStudentDataForUser(parsedSession.email);
          }
        }
        setIsLoading(false);
        return null;
      })
      .then(function() {
        setIsLoading(false);
      })
      .catch(function(error) {
        console.log('Error checking login status:', error);
        setIsLoading(false);
      });
  }

  useEffect(function() {
    checkLoginStatus();
    loadTheme();
  }, []);

  const contextValue = {
    studentData: studentData,
    updateStudentData: updateStudentData,
    isLoggedIn: isLoggedIn,
    login: login,
    signup: signup,
    logout: logout,
    isDarkMode: isDarkMode,
    toggleTheme: toggleTheme,
    isLoading: isLoading,
    resetAllData: resetAllData,
    currentUser: currentUser,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}