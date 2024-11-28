const apiKey = "fffffaaaaafffffaaaaafffffaaaaafffffaaaaafffffaaaaafffffaaaaaxxxx";


const checkIfUserExisted = (name) => {
  return fetch(`https://ji-translation-api.herokuapp.com/translations?username=${name}`)
    .then(response => response.json())
    .then(results => {
      return results;
    });
}

const createNewUser = (name) => {
  return fetch(`https://ji-translation-api.herokuapp.com/translations`, {
        method: 'POST',
        headers: {
          'X-API-Key': apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: name, 
            translations: [] 
        })
    }).then(response => {
      if(!response.ok) {
        throw new Error('Could not create user');
      }
      return response.json();
    })
    .then(response => {
      return response;
    });
}

const storeNewTranslation = (userId, translations) => {
  return fetch(`https://ji-translation-api.herokuapp.com/translations/${userId}`, {
      method: 'PATCH',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          translations
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not update translations history')
      }
      return response.json()
    })
    .then(updatedUser => {
      return updatedUser;
    })
}

export {
  checkIfUserExisted,
  createNewUser,
  storeNewTranslation,
};