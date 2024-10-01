import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  // mobile view variables
  isMobileViewActive: boolean = false; // main flag to check if mobile view is active

  isRotateDeviceVisible: boolean = false; // flag to show rotate your device message
  isSmallScreenActive: boolean = false; // flag to indicate if the screen is small (mobile view < 1200px for tablets)

  constructor() {}
}
