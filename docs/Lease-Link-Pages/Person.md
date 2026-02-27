---
sidebar_position: 4
---

# Create Person

The Create Person Page allows you to create 5 different types of people. Depending on your permission level:
- App Users
- Tenants
- Contacts
- Building Owners

Each Type of Person Can Have an Image. Simply select Choose File under Profile Image on the Right Side of the create screen.

![Docs Version Dropdown](./img/personImage.png)

## App Users
App Users are people who use Lease Link. If your a Company Admin, or you have permission set to create App Users you can create App Users.

This is used when a new Property Manager comes on board or you would like another person in your company to have access to Lease Link.

![Docs Version Dropdown](./img/appUserOverview.png)

To Create an App User you will need:
- Full Name
- Email
- Phone
- Password (Will be changed by User)
- Confirm Password 
- Role (Setup in [Setting](./settings.md))
- Property Access
    - What Properties does this User have access too
    - Company Admin Roles will have access to all Properties automatically
    - Setup Properties in [Create Property/Unit] (./facility.md)

Once you select a Property it will appear on the right side as a selected property, and it will be removed from the Property Access Dropdown. You can remove Properties by clicking the X on the selected Property

![Docs Version Dropdown](./img/propertySelected.png)

## Tenant
Tenants are companies who occupy spacies in your properties. A Tenant Can Occupy more than one unit or property. Say Starbucks has multiple locations at your properties. Starbucks is 1 Tenant. With Multiple Leases and Units. You can ask questions in chat to each specific unit, and view the extracted leases for each unit starbucks operates seperately.

You can batch create tenants in [Settings](./settings.md)

Tenants will need:
- Full Name
- DBA (optional)
- Active (Checkbox)
- Properties
- Units

To Add multiple units simply add them to multiple properties and/or units.

Before you can add them to units, you have to add them to a property (or properties)

![Docs Version Dropdown](./img/createTenant1.png)

Once you have added them to a Property, you may add them to a Unit

![Docs Version Dropdown](./img/createTenant2.png)

If there are no Tenants or Units, create them at [Create Property](./facility.md)

## Contact

Contacts are People who you contact about a Property.

Whether it's the building owner, lawyer(s), accountants. Anybody who you contact about Property Details will be a contact.

Contact(s) are used in Email Integration (Currently in Development). When you're email in integrated with Lease Link, Lease Link will pull emails from the created Contacts and add them to the Tenant. Once Email Integration is finished, all you have to do is ask questions in chat, and it will use the emails with those contacts

Contacts will need: 
- Full Name
- Email (Important for Email Integration)
- Phone
- Address
- Contact Type
- Related Tenants

![Docs Version Dropdown](./img/Contacts.png)

You may search for tenants in the search bar when you click Related Tenants

![Docs Version Dropdown](./img/RelatedTenants.png)

When done Click Submit

## Building Owner

Building Owners are simply for you to see quickly who building owners are for a Property. They are required to create a Property though. They currently serve no other function in Lease Link.
A Building Owner will not integrate into Email. They must be a contact as well. A Building Owner requires:

- Full Name
- Email
- Phone

![Docs Version Dropdown](./img/BuildingOwner.png)

When done Click Submit