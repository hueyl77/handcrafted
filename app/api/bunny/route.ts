import https from 'https'
import { Readable } from 'stream'

const bunnyAPIHost = 'la.storage.bunnycdn.com'

export async function upload(file: File, path: string) {
  if (!file) {
    throw new Error("Missing File")
  }

  const options = {
    method: 'PUT',
    host: bunnyAPIHost,
    path: path,
    headers: {
      AccessKey: process.env.BUNNY_API_KEY,
      'Content-Type': 'application/octet-stream',
    },
  }

  const response = await doRequest(options, file);
  return response
}

export async function uploadURL(fileUrl: string, filename: string, path: string) {
  if (!fileUrl) {
    throw new Error("Missing url")
  }

  const imgBlob = await fetchBlob(fileUrl)
  const file = new File([imgBlob], filename);

  const options = {
    method: 'PUT',
    host: bunnyAPIHost,
    path: path,
    headers: {
      AccessKey: process.env.BUNNY_API_KEY,
      'Content-Type': 'application/octet-stream',
    },
  }

  const response = await doRequest(options, file);
  return response
}

interface requestOptions {
  method: string
  host: string
  path: string
  headers: {
      AccessKey: string | undefined
      'Content-Type': string
  }
}

async function doRequest(options: requestOptions, file: File) {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.setEncoding('utf8');
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(responseBody));
      });
    });

    req.on('error', (err) => {
      console.log("\nUpload Error: ", err)      
      reject(err);
    });

    const readStream = Readable.from(buffer)

    readStream.pipe(req);
  });
}

async function fetchBlob(url: string) {
  const response = await fetch(url);

  // reading the stream as a blob instead of json
  return response.blob();
}