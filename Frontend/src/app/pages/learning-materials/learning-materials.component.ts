import { Component } from '@angular/core';
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-learning-materials',
  templateUrl: './learning-materials.component.html',
  styleUrls: ['./learning-materials.component.scss']
})
export class LearningMaterialsComponent {
  materials: TreeNode[] = [
    {
      key: '0',
      label: 'Ученици',
      data: 'Students',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '0-0',
          label: '1-ви клас',
          data: 'First grade',
          icon: 'pi pi-fw pi-tag',
          children: [
            { key: '0-0-0', label: 'Събиране.docx', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
            { key: '0-0-1', label: 'Таблица за умножение.docx', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
          ]
        },
        {
          key: '0-1',
          label: '2-ри клас',
          data: 'Second grade',
          icon: 'pi pi-fw pi-tag',
          children: [{ key: '0-1-0', label: 'Геометрия.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
      ]
    },
    {
      key: '0',
      label: 'Студенти',
      data: 'Uni_Students',
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '0-0',
          label: '1-ви курс',
          data: 'First course',
          icon: 'pi pi-fw pi-tag',
          children: [
            { key: '0-0-0', label: 'Събиране.docx', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
            { key: '0-0-1', label: 'Таблица за умножение.docx', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
          ]
        },
        {
          key: '0-1',
          label: '2-ри курс',
          data: 'Second course',
          icon: 'pi pi-fw pi-tag',
          children: [{ key: '0-1-0', label: 'Геометрия.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        },
        {
          key: '0-2',
          label: '3-ти курс',
          data: 'Third course',
          icon: 'pi pi-fw pi-tag',
          children: [
            { key: '0-0-0', label: 'Събиране.docx', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
            { key: '0-0-1', label: 'Таблица за умножение.docx', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
          ]
        },
        {
          key: '0-3',
          label: '4-ти курс',
          data: 'Fourth course',
          icon: 'pi pi-fw pi-tag',
          children: [{ key: '0-1-0', label: 'Геометрия.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
      ]
    },
  ];
}
