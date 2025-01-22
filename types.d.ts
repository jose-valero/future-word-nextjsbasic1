interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

interface ShopifyProductImage {
  id: number;
  alt: string | null;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}

interface ShopifyProduct {
  id: string;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string | null;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: Variant[];
  options: Option[];
  images: ShopifyProductImage[];
  image: string;
}

interface ProductType extends ShopifyProduct {
  description: string;
  price: number;
  quantity: number;
  gql_id: string;
}

interface CollectionsProps {
  id: string;
  title: string;
  handle: string;
}

interface Option {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: string[];
}

interface Variant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: any;
  position: number;
  inventory_policy: string;
  compare_at_price: string;
  fulfillment_service: string;
  inventory_management: any;
  option1: string;
  option2: any;
  option3: any;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: any;
  grams: number;
  image_id: any;
  weight: number;
  weight_unit: string;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  requires_shipping: boolean;
  admin_graphql_api_id: string;
}

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
  image: string;
  merchandiseId?: string;
};

interface OrdersDataProps {
  cancelReason: string | null;
  canceledAt: string | null;
  currencyCode: string;
  customerLocale: string;
  customerUrl: string | null;
  edited: boolean;
  email: string;
  financialStatus: string;
  fulfillmentStatus: string | null;
  id: string;
  name: string;
  orderNumber: number;
  phone: string | null;
  processedAt: string; // o Date, depende
  statusUrl: string;
  lineItems: {
    edges: LineItemsEdge[];
  };
}

interface LineItemsEdge {
  cursor: string;
  node: OrdersNodeProps;
}

interface OrdersNodeProps {
  currentQuantity: number;
  quantity: number;
  title: string;
}

interface OrdersResponse {
  totalOrders?: number;
  orders?: OrderNode[];
}
