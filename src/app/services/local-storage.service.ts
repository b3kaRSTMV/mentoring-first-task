import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Делает сервис доступным во всем приложении
})
export class LocalStorageService {
// // Метод для получения данных из localStorage и их парсинга
// getItem<T>(key: string): T | null {
//   const item = localStorage.getItem(key);
//   return item ? JSON.parse(item) : null;  // Если данные есть, возвращаем их как объект нужного типа
// }

// // Метод для сохранения данных в localStorage
// setItem<T>(key: string, value: T): void {
//   localStorage.setItem(key, JSON.stringify(value));  // Сохраняем данные как строку JSON
// }

// // Метод для удаления данных из localStorage
// removeItem(key: string): void {
//   localStorage.removeItem(key);
// }
  // Метод для получения данных из localStorage и их парсинга
  getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null; // Если данные есть, парсим их, если нет — возвращаем null
  }

  // Метод для сохранения данных в localStorage
  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value)); // Сохраняем данные как строку JSON
  }

  // Метод для удаления данных из localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

