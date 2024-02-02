<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('role_id')->nullable();
            $table->string('user_type')->default('customer');
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('city')->nullable();
            $table->string('gender')->nullable();
            $table->tinyInteger('email_or_otp_verified')->default(0);
            $table->string('verification_code')->nullable();
            $table->string('new_email_verification_code')->nullable();
            $table->string('password');
            $table->string('remember_token')->nullable();
            $table->string('provider_id')->nullable();
            $table->string('avatar')->nullable();
            $table->double('user_balance')->default('0');
            $table->tinyInteger('is_banned')->default(0);
            $table->integer('shop_id')->nullable();
            $table->integer('customer_id')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->integer('fcm')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}