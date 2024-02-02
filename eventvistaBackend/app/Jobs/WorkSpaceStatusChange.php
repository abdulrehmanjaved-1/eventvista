<?php

namespace App\Jobs;

use App\Traits\AdminBase;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class WorkSpaceStatusChange implements ShouldQueue
{
    use  Dispatchable, InteractsWithQueue, Queueable, SerializesModels,AdminBase;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $payload = null;

    public function __construct($payload)
    {

        $this->payload = $payload;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        $this->__workspace_update_status($this->payload);
    }
}
