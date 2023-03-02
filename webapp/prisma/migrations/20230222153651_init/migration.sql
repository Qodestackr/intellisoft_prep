-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "race" TEXT NOT NULL,
    "hispanic_latino" BOOLEAN NOT NULL,
    "medical_record_number" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facilities" (
    "facility_id" SERIAL NOT NULL,
    "facility_name" TEXT NOT NULL,
    "facility_type" TEXT NOT NULL,
    "facility_address_id" INTEGER NOT NULL,

    CONSTRAINT "facilities_pkey" PRIMARY KEY ("facility_id")
);

-- CreateTable
CREATE TABLE "facility_address" (
    "facility_address_id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "facility_address_pkey" PRIMARY KEY ("facility_address_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "facility_address_facility_address_id_key" ON "facility_address"("facility_address_id");

-- AddForeignKey
ALTER TABLE "facilities" ADD CONSTRAINT "facilities_facility_address_id_fkey" FOREIGN KEY ("facility_address_id") REFERENCES "facility_address"("facility_address_id") ON DELETE RESTRICT ON UPDATE CASCADE;
