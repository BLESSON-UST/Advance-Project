import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId!: number ;
  // course!: Course;
  course: Course = new Course('', '', []);

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = Number(params.get('courseid'));
      this.getCourseDetails();
    });
  }

  getCourseDetails(): void {
    this.courseService.getCourse(this.courseId).subscribe(
      course => {
        this.course = course;
      },
      error => {
        console.log(error);
      }
    );
  }

  rateCourse(): void {
    // Implement your logic for rating the course here
  }

  registerCourse(): void {
    // Implement your logic for registering the course here
  }
}
