<<<<<<< HEAD
// const { get } = require('http')

// function getTaco() {
//   return new Promise((resolve, reject) => {
//     let body = '';
//     const req = get('http://taco-randomizer.herokuapp.com/random/', (res) => {
//       res.on('data', data => body += data)
//       res.on('error', err => reject(err))
//       res.on('end', () => resolve(JSON.parse(body)))
//     })
//   })
// }

// async function* tacoFactory(howMany) {
//   for (let i = 0; i < howMany; i++) {
//     let taco
//     try {
//       taco = await getTaco()
//       yield taco
//     } catch (err) {
//       console.error(err)
//     }
//   }
// }

// async function giveMeSomeTacos(howMany) {
//   console.time('Tacos retrieved')
//   for await (let taco of tacoFactory(howMany)) {
//     const description = ['shell', 'base_layer', 'mixin', 'seasoning', 'condiment'].map(layer => taco[layer].name).join(', ')
//     console.log(description)
//   }
//   console.timeEnd('Tacos retrieved')
// }

// giveMeSomeTacos(10)

function wait(client, resolve) {
  console.log('Waiting: ' + client.connecting)
  if (client.connecting) {
    setTimeout(() => wait(client, resolve), 100); 
    return;
  }
  resolve();
} 

async function waitForConnection(client) {
  return new Promise(resolve => {
    wait(client, resolve);
  });
}

async function connect() {
  let ldap = require('ldapjs');
  let client = ldap.createClient({
    url: 'ldap://ad.uws.edu.au:1389'
  }); 

  console.log(client);
  await waitForConnection(client)  

  
}

connect(); 

// // Define $username and $password
// $username=$_POST['username'];
// $password=$_POST['password'];

// // To protect MySQL injection for Security purpose
// $username = stripslashes($username);
// $password = stripslashes($password);
// //$username = mysqli_real_escape_string($username);
// //$password = mysqli_real_escape_string($password);

// // Authenticate with LDAP here
// $ldapserver = 'ad.uws.edu.au';
// $domain = '@ad.uws.edu.au';
// $base_dn = 'ou=Staff,ou=people,DC=AD,DC=UWS,DC=EDU,DC=AU';

// $ldap_conn = ldap_connect($ldapserver);
// ldap_set_option($ldap_conn, LDAP_OPT_PROTOCOL_VERSION, 3);
// ldap_set_option($ldap_conn, LDAP_OPT_REFERRALS, 0);

// $userfound = ldap_bind($ldap_conn, $username . $domain, $password);

// // Authentication successful
// If ($userfund)  {
//                $filter = 'samaccountname='. $username;
//                $attributes = array("sn", "givenname", "mail");
//                $result = ldap_search($ldap_conn, $base_dn, $filter, $attributes);
//                $data = ldap_get_entries($ldap_conn, $result);
//                $firstname = $data[0]["givenname"][0];
//                $lastname = $data[0]["sn"][0];
//                $email = $data[0]["mail"][0];

//                $fullname = $firstname . ' ' . $lastname;

//                // Take user to next page

// }
=======
// const { get } = require('http')

// function getTaco() {
//   return new Promise((resolve, reject) => {
//     let body = '';
//     const req = get('http://taco-randomizer.herokuapp.com/random/', (res) => {
//       res.on('data', data => body += data)
//       res.on('error', err => reject(err))
//       res.on('end', () => resolve(JSON.parse(body)))
//     })
//   })
// }

// async function* tacoFactory(howMany) {
//   for (let i = 0; i < howMany; i++) {
//     let taco
//     try {
//       taco = await getTaco()
//       yield taco
//     } catch (err) {
//       console.error(err)
//     }
//   }
// }

// async function giveMeSomeTacos(howMany) {
//   console.time('Tacos retrieved')
//   for await (let taco of tacoFactory(howMany)) {
//     const description = ['shell', 'base_layer', 'mixin', 'seasoning', 'condiment'].map(layer => taco[layer].name).join(', ')
//     console.log(description)
//   }
//   console.timeEnd('Tacos retrieved')
// }

// giveMeSomeTacos(10)

function wait(client, resolve) {
  console.log('Waiting: ' + client.connecting)
  if (client.connecting) {
    setTimeout(() => wait(client, resolve), 100); 
    return;
  }
  resolve();
} 

async function waitForConnection(client) {
  return new Promise(resolve => {
    wait(client, resolve);
  });
}

async function connect() {
  let ldap = require('ldapjs');
  let client = ldap.createClient({
    url: 'ldap://ad.uws.edu.au:1389'
  }); 

  console.log(client);
  await waitForConnection(client)  

  
}

connect(); 

// // Define $username and $password
// $username=$_POST['username'];
// $password=$_POST['password'];

// // To protect MySQL injection for Security purpose
// $username = stripslashes($username);
// $password = stripslashes($password);
// //$username = mysqli_real_escape_string($username);
// //$password = mysqli_real_escape_string($password);

// // Authenticate with LDAP here
// $ldapserver = 'ad.uws.edu.au';
// $domain = '@ad.uws.edu.au';
// $base_dn = 'ou=Staff,ou=people,DC=AD,DC=UWS,DC=EDU,DC=AU';

// $ldap_conn = ldap_connect($ldapserver);
// ldap_set_option($ldap_conn, LDAP_OPT_PROTOCOL_VERSION, 3);
// ldap_set_option($ldap_conn, LDAP_OPT_REFERRALS, 0);

// $userfound = ldap_bind($ldap_conn, $username . $domain, $password);

// // Authentication successful
// If ($userfund)  {
//                $filter = 'samaccountname='. $username;
//                $attributes = array("sn", "givenname", "mail");
//                $result = ldap_search($ldap_conn, $base_dn, $filter, $attributes);
//                $data = ldap_get_entries($ldap_conn, $result);
//                $firstname = $data[0]["givenname"][0];
//                $lastname = $data[0]["sn"][0];
//                $email = $data[0]["mail"][0];

//                $fullname = $firstname . ' ' . $lastname;

//                // Take user to next page

// }
>>>>>>> Basic Querying works
