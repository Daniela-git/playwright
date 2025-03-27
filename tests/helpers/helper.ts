import { Page } from '@playwright/test';

export class MyHelpers {
  private baseUrl: string;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = 'https://baseurl.com';
  }
  async doSomething() {
    await this.page.goto(this.baseUrl);
  }
}
