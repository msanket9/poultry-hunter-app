use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::account_info::AccountInfo;

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Farm {
	farm_name: String,
	owner_name: String,
	contact_number: String,
	farm_address: String,
	infected: u8,
}
#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Distributor {
	name: String,
	contact_address: String,
	contact_number: String,
	infected: u8,
}
#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Seller {
	shop_name: String,
	owner_name: String,
	shop_address: String,
	owner_contact: String,
	infected: u8,
}
#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct HealthOfficer {
	name: String,
	office_id: String,
	office_address: String,
	officer_contact: String,
}
#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct Batch {
	pub batch_id: u32,
	pub farm_pubkey: String,
	pub distributor_pubkey: String,
	pub seller_pubkey: String,
	pub affected: u8,
	pub generated_at: String,
	pub sold_at: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub enum Affected {
	Affected,
	Unaffected,
}

pub fn write_data(account: &AccountInfo, input: &[u8], offset: usize) {
	let mut account_data = account.data.borrow_mut();
	account_data[offset..offset + input.len()].copy_from_slice(input);
}
