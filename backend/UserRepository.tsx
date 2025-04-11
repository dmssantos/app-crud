import { PrismaClient } from "@prisma/client";

export default class UserRepository {
  private static db: PrismaClient = new PrismaClient();

  static async save(user: any) {
    return await this.db.user.upsert({
      where: { id: user.id },
      update: user,
      create: user,
    });
  }

  static async getAll() {
    return await this.db.user.findMany();
  }

  static async getById(id: string) {
    return await this.db.user.findUnique({ where: { id } });
  }
}
