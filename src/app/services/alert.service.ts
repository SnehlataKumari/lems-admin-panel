import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  error(errorMessage) {
    Swal.fire({
      title: errorMessage,
      icon: 'error',
    });
  }

  success(errorMessage) {
    Swal.fire({
      title: errorMessage,
      icon: 'success',
    });
  }
}
