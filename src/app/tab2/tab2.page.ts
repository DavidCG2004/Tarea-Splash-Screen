import { Component } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  // Foto y posición actualmente seleccionadas
  selectedPhoto: UserPhoto | null = null;
  selectedPosition: number = -1;

  constructor(public photoService: PhotoService) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  selectPhoto(photo: UserPhoto, position: number) {
    // Si ya está seleccionada, deseleccionar
    if (this.selectedPosition === position) {
      this.selectedPhoto = null;
      this.selectedPosition = -1;
    } else {
      this.selectedPhoto = photo;
      this.selectedPosition = position;
    }
  }

  async deleteSelected() {
    if (this.selectedPhoto !== null) {
      await this.photoService.deletePhoto(this.selectedPhoto, this.selectedPosition);
      this.selectedPhoto = null;
      this.selectedPosition = -1;
    }
  }

  async shareSelected() {
    if (this.selectedPhoto !== null) {
      await this.photoService.sharePhoto(this.selectedPhoto);
    }
  }

}