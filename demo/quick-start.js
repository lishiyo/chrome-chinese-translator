/**

https://cloud.google.com/translate/docs/reference/libraries

Application Default Credentials: Run once per local user env:
    gcloud beta auth application-default login

API client libraries that use the application default credentials automatically pick up the created credentials.
 */

'use strict';

// [START translate_quickstart]
// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate');

// Your Google Cloud Platform project ID
const projectId = 'chrome-translate';

// Instantiates a client
const translateClient = Translate({
  projectId: projectId
});

// The text to translate
const text = 'Hello, world!';
// The target language
const target = 'zh-cn';

// Translates some text into Russian
translateClient.translate(text, target)
  .then((results) => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  });
