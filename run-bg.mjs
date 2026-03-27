import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function processImage() {
  try {
    const buffer = fs.readFileSync('public/profile.png');
    const uint8Array = new Uint8Array(buffer);
    
    console.log('Running imgly background removal on the AI generated image...');
    const blob = await removeBackground(uint8Array, {
        output: { format: 'image/png' }
    });
    
    const arrayBuffer = await blob.arrayBuffer();
    fs.writeFileSync('public/profile_nobg.png', Buffer.from(arrayBuffer));
    console.log('Background removed successfully! Saved to profile_nobg.png');
  } catch(e) {
    console.error('Error processing:', e);
  }
}

processImage();
