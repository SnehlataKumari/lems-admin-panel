import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private fb: FormBuilder,
  ) {}
  
  buildFormData(formData, data, parentKey?) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      const value = data == null ? '' : data;
      formData.append(parentKey, value);
    }
  }

  jsonToFormData(data) {
    const formData = new FormData();
    this.buildFormData(formData, data);
    return formData;
  }

  getFGFromArray(itemList: any[]): FormGroup {
    const itemObj = itemList.reduce((prevObj, value) => {
      prevObj[value] = false;
      return prevObj;
    }, {});
    return this.fb.group(itemObj);
  }

}