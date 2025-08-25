---
sidebar_position: 2
description: How to create Token Curated Lists using Kleros Curate
---

# Kleros Curate Tutorial

## Getting Started

Upon landing on Curate, you will be greeted with a list of cards which represent different curated lists. This is the top level (a list of lists if you will) which can be compared to browsing category pages on Amazon - below the main category, you'll find specialized subcategories each with their own curated lists.


## Creating Your First List

The first thing we're going to do is create a list ourselves. This involves deploying two smart contracts to the Ethereum blockchain that handle the logic and operations of your curated list.

### Step 1: Initial Setup

Click **'Create a List'** in the header to start the creation process.


### Step 2: Basic Information


You'll need to fill in several key fields:

#### **Title**
The name of your list. For our example, we'll use "Hip Hop Legends" to keep it straightforward.

#### **Description**  
A short explanation of what your list is about and its purpose.

#### **Acceptance Criteria**
This is the **most critical field** for your list's operation. The Primary Document (or acceptance criteria) specifies exactly what can and cannot be accepted to the list.

**Example Hip Hop Legends criteria:**

**Accept if:**
- Gold or Platinum record selling artist
- Famous before 2016  
- Has >100k YouTube views on at least one song

**Reject if:**
- Trap artist
- Grime artist
- Parody artist
- PG-friendly lyrics only

#### **Item Name**
What you'll call individual entries in your list. In our case, each item is a "Hip Hop Legend" (e.g., Eminem, Tupac, Snoop Dogg).

### Step 3: Economic Parameters

#### **The Slider**
The easiest way to set the economic parameters for your list:

- **Lower ETH deposits** = More submissions (but potentially more spam)
- **Higher ETH deposits** = Fewer but higher-quality submissions

If you need guidance on parameters for your specific list, [contact us on Telegram](https://t.me/joinchat/GGUsLhwZj_-aa0SoQTBltA).

#### **Court & Jurors**
Select which Kleros court will resolve challenged submissions from your list:

- Each court has different arbitration costs
- Higher-value lists should use higher-cost courts
- For most lists, we recommend the **'Curate' court**
- For complex lists, [ask our team for guidance](http://slack.kleros.io/)

### Advanced Parameters

For power users who want granular control:

#### **Submission Deposit**
Cost (in ETH) for users to submit items to your list. This is a stake - they get it back if accepted.

#### **Removal Deposit**  
Cost to request removal of an already-registered item. The item goes through a challenge period before removal.

#### **Challenge Submission Deposit**
Cost to challenge a new submission you believe doesn't meet criteria.

#### **Challenge Removal Deposit**
Cost to challenge a removal request you disagree with.

**Balance is key:** Higher costs reduce spam but may discourage legitimate participation.

[Read our detailed parameter guide →](https://blog.kleros.io/choosing-parameters-in-kleros-curate/)

### Step 4: Define Item Fields


Define what information each list item will contain:

**For our Hip Hop Legends example:**
1. **Name** (Text field, Index: ON) - Makes items searchable
2. **Image** (Image field) - Picture of the artist

**Index Setting:** Enable search functionality for that field. Users can search the entire list using indexed fields.

## Badge System (Optional)

Badges create tiered systems where submissions can earn additional qualifications:

**Examples:**
- **Grammy Badge** - Only for artists with Grammy awards
- **Platinum Badge** - Only for artists with platinum-selling records  
- **Hall of Fame Badge** - For inductees in music halls of fame

Badges allow for sophisticated categorization within your list. [Contact us](http://t.me/kleros) for badge implementation help.

## Deployment

### Final Review

Review all your settings before deployment. You can go back to previous screens to make corrections.

### Deploy Your List

Click **Deploy!** when ready.

### Pay Deployment Fees

You'll pay gas fees for deploying the list contract (and badge contract if using badges). Accept the Metamask transactions to complete deployment.

## Adding Your List to the Registry


Your newly created list won't automatically appear on Curate's homepage. To make it discoverable:

1. Click **'Submit List'** on the registry page
2. Make a deposit confirming your list meets the registry criteria
3. If accepted, your list becomes publicly visible
4. Lists can be challenged later if they go off-topic or become spammy


## Using Your List

### Making Submissions


Once deployed, users can submit items to your list:

1. Click the submit button for your list
2. Fill in the required fields  
3. Pay the submission deposit (returned if accepted)
4. Wait for the challenge period

### Challenging Submissions


If you see a submission that doesn't meet the criteria:

1. Select the item you want to challenge
2. Write a description explaining why it doesn't belong
3. Pay the challenge deposit
4. Kleros jurors will decide the outcome

**Remember:** Challenge deposits are at stake. Win the case, get it back. Lose, and it's used to pay arbitration costs.

## Best Practices

- **Clear criteria** - Write unambiguous acceptance/rejection rules
- **Balanced deposits** - Not too high (discourages participation) or too low (enables spam)
- **Regular maintenance** - Monitor your list and challenge inappropriate items
- **Community engagement** - Promote your list to attract quality contributors

## Next Steps

- [Explore Kleros Scout for automated curation](./scout)
- [Learn about advanced Curate parameters](https://blog.kleros.io/choosing-parameters-in-kleros-curate/)
- [Join the Curate community on Telegram](https://t.me/joinchat/GGUsLhwZj_-aa0SoQTBltA)