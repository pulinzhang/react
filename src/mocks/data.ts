export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: "张三",
    email: "zhangsan@example.com",
    role: "管理员"
  },
  {
    id: 2,
    name: "李四",
    email: "lisi@example.com",
    role: "用户"
  },
  {
    id: 3,
    name: "王五",
    email: "wangwu@example.com",
    role: "用户"
  }
];

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "产品A",
    price: 99.99,
    description: "这是一个示例产品A"
  },
  {
    id: 2,
    name: "产品B",
    price: 199.99,
    description: "这是一个示例产品B"
  },
  {
    id: 3,
    name: "产品C",
    price: 299.99,
    description: "这是一个示例产品C"
  }
]; 