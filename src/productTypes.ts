export interface products {
    products?: (ProductsEntity)[] | null;
}
export interface ProductsEntity {
    id: number;
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    created_at: string;
    handle: string;
    updated_at: string;
    published_at: string;
    template_suffix: string;
    status: string;
    published_scope: string;
    tags: string;
    admin_graphql_api_id: string;
    variants?: (VariantsEntity)[] | null;
    options?: (OptionsEntity)[] | null;
    images?: (null)[] | null;
    image?: null;
}
export interface VariantsEntity {
    id: number;
    product_id: number;
    title: string;
    price: string;
    sku: string;
    position: number;
    inventory_policy: string;
    compare_at_price?: null;
    fulfillment_service: string;
    inventory_management: string;
    option1: string;
    option2?: null;
    option3?: null;
    created_at: string;
    updated_at: string;
    taxable: boolean;
    barcode: string;
    grams: number;
    image_id?: null;
    weight: number;
    weight_unit: string;
    inventory_item_id: number;
    inventory_quantity: number;
    old_inventory_quantity: number;
    requires_shipping: boolean;
    admin_graphql_api_id: string;
}
export interface OptionsEntity {
    id: number;
    product_id: number;
    name: string;
    position: number;
    values?: (string)[] | null;
}
