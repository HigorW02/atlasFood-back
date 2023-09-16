import { Router } from "express";
import { container } from "tsyringe";
import { ProductController } from "../controllers/productController";

import baseRoutes from "@/modules/base/base.router";

const productRouter = Router();
const productController: ProductController = container.resolve('ProductController');

productRouter.use('/', baseRoutes(productController));

export default productRouter;