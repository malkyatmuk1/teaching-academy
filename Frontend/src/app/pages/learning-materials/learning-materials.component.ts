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
      data: null,
      icon: 'pi pi-fw pi-inbox',
      children: [
        {
          key: '1-4',
          label: '1-4 клас',
          data: null,
          icon: 'pi pi-fw pi-tag',
          children: [
            { key: '1-4-1', label: 'Формули.pdf', icon: 'pi pi-fw pi-file', data: 'assets/learning-materials/1-4-grade/Формули-Експонента.pdf' },
          ]
        },
        {
          key: '5-6',
          label: '5-6 клас',
          data: null,
          icon: 'pi pi-fw pi-tag',
          children: [
            { key: '5-6-1', label: 'Формули.pdf', icon: 'pi pi-fw pi-file', data: 'assets/learning-materials/5-6-grade/Формули-Експонента.pdf' },
          ]
        },
        {
          key: '7',
          label: '7 клас',
          data: null,
          icon: 'pi pi-fw pi-tag',
          children: [
            { key: '7-0-1', label: 'Формули.pdf', icon: 'pi pi-fw pi-file', data: 'assets/learning-materials/7-grade/Формули-Експонента.pdf' },
          ]
        },
      ]
    },
    {
      key: '0',
      label: 'Студенти',
      data: null,
      icon: 'pi pi-fw pi-inbox',
      children: [
        // {
        //   key: '0-0',
        //   label: '1-ви курс',
        //   data: 'First course',
        //   icon: 'pi pi-fw pi-tag',
        //   children: [
        //     { key: '0-0-0', label: 'Събиране.docx', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
        //     { key: '0-0-1', label: 'Таблица за умножение.docx', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
        //   ]
        // },
        // {
        //   key: '0-1',
        //   label: '2-ри курс',
        //   data: 'Second course',
        //   icon: 'pi pi-fw pi-tag',
        //   children: [{ key: '0-1-0', label: 'Геометрия.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        // },
        // {
        //   key: '0-2',
        //   label: '3-ти курс',
        //   data: 'Third course',
        //   icon: 'pi pi-fw pi-tag',
        //   children: [
        //     { key: '0-0-0', label: 'Събиране.docx', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
        //     { key: '0-0-1', label: 'Таблица за умножение.docx', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
        //   ]
        // },
        // {
        //   key: '0-3',
        //   label: '4-ти курс',
        //   data: 'Fourth course',
        //   icon: 'pi pi-fw pi-tag',
        //   children: [{ key: '0-1-0', label: 'Геометрия.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        // }
      ]
    },
  ];

  onFileSelect(e: any) {
    if (e?.node?.data) {
      const filePath = e?.node?.data;
      const link = document.createElement('a');
      link.href = filePath;
      link.download = filePath.split('/').pop();
      link.click();
    }

  }
}
