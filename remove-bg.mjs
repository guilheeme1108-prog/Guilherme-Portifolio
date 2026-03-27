import { removeBackground } from '@imgly/background-removal-node';
import sharp from 'sharp';
import fs from 'fs';

async function processImage() {
  try {
    console.log('Converting to PNG and standardizing format with sharp...');
    await sharp('public/profile.jpg')
      .resize({ width: 800, withoutEnlargement: true })
      .toFormat('png')
      .toFile('public/temp.png');
      
    const buffer = fs.readFileSync('public/temp.png');
    const uint8Array = new Uint8Array(buffer);
    
    console.log('Running imgly background removal... (this might take a few moments)');
    const blob = await removeBackground(uint8Array, {
        debug: true,
        output: { format: 'image/png' }
    });
    
    const arrayBuffer = await blob.arrayBuffer();
    fs.writeFileSync('public/profile.png', Buffer.from(arrayBuffer));
    fs.unlinkSync('public/temp.png');
    
    console.log('Background removed successfully! Saved to profile.png');
  } catch(e) {
    console.error('Error processing:', e);
  }
}

processImage();
