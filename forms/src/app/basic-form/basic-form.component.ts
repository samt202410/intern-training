import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss',
})
export class BasicFormComponent implements OnInit {
  form = this.initForm();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  submitForm() {
    console.log(this.form.value);
  }

  private initForm() {
    return this.fb.group({
      name: this.fb.control({ value: 'Sanyam Trehan', disabled: false }, [
        Validators.required,
        Validators.maxLength(20),
      ]),
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
